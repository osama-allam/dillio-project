using Microsoft.EntityFrameworkCore.Migrations;

namespace Dillio_Backend.DAL.Migrations
{
    public partial class RestrictCascadingDelete : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Image_Product_FK_ProductId",
                table: "Image");

            migrationBuilder.DropForeignKey(
                name: "FK_Review_Product_FK_ProductId",
                table: "Review");

            migrationBuilder.DropForeignKey(
                name: "FK_Specs_Product_ProductId",
                table: "Specs");

            migrationBuilder.AddForeignKey(
                name: "FK_Image_Product_FK_ProductId",
                table: "Image",
                column: "FK_ProductId",
                principalTable: "Product",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Review_Product_FK_ProductId",
                table: "Review",
                column: "FK_ProductId",
                principalTable: "Product",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Specs_Product_ProductId",
                table: "Specs",
                column: "ProductId",
                principalTable: "Product",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Image_Product_FK_ProductId",
                table: "Image");

            migrationBuilder.DropForeignKey(
                name: "FK_Review_Product_FK_ProductId",
                table: "Review");

            migrationBuilder.DropForeignKey(
                name: "FK_Specs_Product_ProductId",
                table: "Specs");

            migrationBuilder.AddForeignKey(
                name: "FK_Image_Product_FK_ProductId",
                table: "Image",
                column: "FK_ProductId",
                principalTable: "Product",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Review_Product_FK_ProductId",
                table: "Review",
                column: "FK_ProductId",
                principalTable: "Product",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Specs_Product_ProductId",
                table: "Specs",
                column: "ProductId",
                principalTable: "Product",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
