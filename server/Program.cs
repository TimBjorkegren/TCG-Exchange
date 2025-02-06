using System.Security.Cryptography.X509Certificates;

var builder = WebApplication.CreateBuilder(args);

// Lägg till CORS-tjänst
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()  // Tillåter alla domäner (använd detta i utveckling)
              .AllowAnyMethod()  // Tillåter alla HTTP-metoder
              .AllowAnyHeader(); // Tillåter alla headers
    });
});

var app = builder.Build();

// Använd CORS-policyn innan några routing-mappningar
app.UseCors("AllowAll");

List<OrderRequest> orders = new();


app.MapGet("/api/orders", () => Results.Ok(orders));

app.MapPost("/api/orders", async (HttpContext context) =>
{
    try
    {
        var order = await context.Request.ReadFromJsonAsync<OrderRequest>();
        if (order == null || order.Items.Count == 0)
        {
            return Results.BadRequest("Invalid order data");
        }

        Console.WriteLine($"Received order for: {order.customer.NameOfCustomer}");
        orders.Add(order);
        return Results.Ok(new { message = "Order received", order });
    }
    catch (Exception ex)
    {
        return Results.Problem($"Error processing order: {ex.Message}");
    }
});

app.Run();


// Definiera datamodeller

public record OrderRequest(Customer customer, List<ProductOrder> Items, float Total);
public record Customer (string NameOfCustomer, string CreditCard, string Address, string PhoneNumber);
public record ProductOrder(int Id, string Name, float Price, int Quantity);

