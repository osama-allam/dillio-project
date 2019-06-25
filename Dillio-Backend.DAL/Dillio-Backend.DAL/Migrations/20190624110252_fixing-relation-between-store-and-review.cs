using Microsoft.EntityFrameworkCore.Migrations;

namespace Dillio_Backend.DAL.Migrations
{
    public partial class fixingrelationbetweenstoreandreview : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "StoreId",
                table: "Review",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Review_StoreId",
                table: "Review",
                column: "StoreId");

            migrationBuilder.AddForeignKey(
                name: "FK_Review_Store_StoreId",
                table: "Review",
                column: "StoreId",
                principalTable: "Store",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Review_Store_StoreId",
                table: "Review");

            migrationBuilder.DropIndex(
                name: "IX_Review_StoreId",
                table: "Review");

            migrationBuilder.DropColumn(
                name: "StoreId",
                table: "Review");
        }
    }
}
