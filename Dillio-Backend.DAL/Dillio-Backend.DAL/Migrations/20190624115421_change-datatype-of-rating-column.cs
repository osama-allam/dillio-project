using Microsoft.EntityFrameworkCore.Migrations;

namespace Dillio_Backend.DAL.Migrations
{
    public partial class changedatatypeofratingcolumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<float>(
                name: "Rating",
                table: "Review",
                nullable: false,
                oldClrType: typeof(int));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Rating",
                table: "Review",
                nullable: false,
                oldClrType: typeof(float));
        }
    }
}
