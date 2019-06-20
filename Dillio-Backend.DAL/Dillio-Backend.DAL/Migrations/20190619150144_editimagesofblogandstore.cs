using Microsoft.EntityFrameworkCore.Migrations;

namespace Dillio_Backend.DAL.Migrations
{
    public partial class editimagesofblogandstore : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Image_Blog_BlogId",
                table: "Image");

            migrationBuilder.DropForeignKey(
                name: "FK_Image_Store_StoreId",
                table: "Image");

            migrationBuilder.DropIndex(
                name: "IX_Image_BlogId",
                table: "Image");

            migrationBuilder.DropIndex(
                name: "IX_Image_StoreId",
                table: "Image");

            migrationBuilder.DropColumn(
                name: "FK_ImageId",
                table: "Store");

            migrationBuilder.DropColumn(
                name: "BlogId",
                table: "Image");

            migrationBuilder.DropColumn(
                name: "StoreId",
                table: "Image");

            migrationBuilder.AddColumn<string>(
                name: "ImageURL",
                table: "Store",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ImageId",
                table: "Blog",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ImageURL",
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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Blog_Image_ImageId",
                table: "Blog");

            migrationBuilder.DropIndex(
                name: "IX_Blog_ImageId",
                table: "Blog");

            migrationBuilder.DropColumn(
                name: "ImageURL",
                table: "Store");

            migrationBuilder.DropColumn(
                name: "ImageId",
                table: "Blog");

            migrationBuilder.DropColumn(
                name: "ImageURL",
                table: "Blog");

            migrationBuilder.AddColumn<int>(
                name: "FK_ImageId",
                table: "Store",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "BlogId",
                table: "Image",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "StoreId",
                table: "Image",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Image_BlogId",
                table: "Image",
                column: "BlogId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Image_StoreId",
                table: "Image",
                column: "StoreId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Image_Blog_BlogId",
                table: "Image",
                column: "BlogId",
                principalTable: "Blog",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Image_Store_StoreId",
                table: "Image",
                column: "StoreId",
                principalTable: "Store",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
