using Backend.Models;
using Backend.Services.BussinessServices;
using Backend.Services.RepositoryServices;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

const string CORS_POLICY = "CorsPolicy";
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(Assembly.GetExecutingAssembly());
builder.Services.AddEntityFrameworkNpgsql()
                .AddDbContext<CnttContext>(opt => opt.UseNpgsql(builder.Configuration.GetConnectionString("Context")));

builder.Services
    .AddControllers(options => options.UseDateOnlyTimeOnlyStringConverters())
    .AddJsonOptions(options => options.UseDateOnlyTimeOnlyStringConverters());

builder.Services.AddScoped<ChamCongRepositoryServices>();
builder.Services.AddScoped<ChamCongServices>();
builder.Services.AddScoped<NguoiDungRepositoryServices>();
builder.Services.AddScoped<NguoiDungServices>();
builder.Services.AddScoped<LuongRepositoryServices>();
builder.Services.AddScoped<LuongServices>();
builder.Services.AddScoped<OTRepositoryServices>();
builder.Services.AddScoped<OTServices>();
builder.Services.AddScoped<NghiPhepRepositoryServices>();
builder.Services.AddScoped<NghiPhepServices>();

builder.Services.AddCors(options =>
{
    options.AddPolicy(CORS_POLICY, builder =>
    {
        builder.AllowAnyMethod();
        builder.AllowAnyHeader();
        builder.AllowAnyOrigin();
    });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(CORS_POLICY);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
