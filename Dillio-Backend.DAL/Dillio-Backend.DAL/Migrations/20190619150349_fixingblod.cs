using Microsoft.EntityFrameworkCore.Migrations;

namespace Dillio_Backend.DAL.Migrations
{
    public partial class fixingblod : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Blog_Image_ImageId",
                table: "Blog");

            migrationBuilder.DropIndex(
                name: "IX_Blog_ImageId",
                table: "Blog");

            migrationBuilder.DropColumn(
                name: "ImageId",
                table: "Blog");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ImageId",
                table: "Blog",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Blog_ImageId",
                table: "Blog",
                column: "ImageId");

            migrationBuilder.AddForeignKey(
                name: "FK_Blog_Image_ImageId",
                table: "Blog",
                column: "ImageId",
                principalTable: "Image",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
