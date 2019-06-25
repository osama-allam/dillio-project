using Microsoft.EntityFrameworkCore.Migrations;

namespace Dillio_Backend.DAL.Migrations
{
    public partial class editdescriptioncolumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ReviewDescription",
                table: "Review",
                newName: "description");

            migrationBuilder.AlterColumn<string>(
                name: "description",
                table: "Review",
                type: "nvarchar(350)",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "description",
                table: "Review",
                newName: "ReviewDescription");

            migrationBuilder.AlterColumn<string>(
                name: "ReviewDescription",
                table: "Review",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(350)",
                oldNullable: true);
        }
    }
}
