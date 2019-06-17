namespace DillioRepository.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DBInit : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Blog",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(nullable: false, maxLength: 50),
                        Description = c.String(maxLength: 200),
                        TimeOfBLog = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Comment",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Text = c.String(nullable: false, maxLength: 50),
                        BlogId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Blog", t => t.BlogId, cascadeDelete: true)
                .Index(t => t.BlogId);
            
            CreateTable(
                "dbo.Image",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Url = c.String(nullable: false, maxLength: 100),
                        ProductId = c.Int(nullable: false),
                        BlogId = c.Int(nullable: false),
                        Blog_Id = c.Int(),
                        Store_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Blog", t => t.Blog_Id, cascadeDelete: true)
                .ForeignKey("dbo.Product", t => t.ProductId)
                .ForeignKey("dbo.Store", t => t.Store_Id, cascadeDelete: true)
                .Index(t => t.ProductId)
                .Index(t => t.Blog_Id)
                .Index(t => t.Store_Id);
            
            CreateTable(
                "dbo.Product",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 50),
                        Price = c.Single(nullable: false),
                        Discount = c.Single(nullable: false),
                        FK_CategoryId = c.Int(nullable: false),
                        Order_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Category", t => t.FK_CategoryId)
                .ForeignKey("dbo.Orders", t => t.Order_Id)
                .Index(t => t.FK_CategoryId)
                .Index(t => t.Order_Id);
            
            CreateTable(
                "dbo.Category",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 50),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Reviews",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ReviewDescription = c.String(),
                        Name = c.String(),
                        Email = c.String(),
                        FK_ProductId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Product", t => t.FK_ProductId)
                .Index(t => t.FK_ProductId);
            
            CreateTable(
                "dbo.Store",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 50),
                        FK_ImageId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Like",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BlogId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Blog", t => t.BlogId, cascadeDelete: true)
                .Index(t => t.BlogId);
            
            CreateTable(
                "dbo.Orders",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        DateOfOrder = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Product", "Order_Id", "dbo.Orders");
            DropForeignKey("dbo.Like", "BlogId", "dbo.Blog");
            DropForeignKey("dbo.Image", "Store_Id", "dbo.Store");
            DropForeignKey("dbo.Reviews", "FK_ProductId", "dbo.Product");
            DropForeignKey("dbo.Image", "ProductId", "dbo.Product");
            DropForeignKey("dbo.Product", "FK_CategoryId", "dbo.Category");
            DropForeignKey("dbo.Image", "Blog_Id", "dbo.Blog");
            DropForeignKey("dbo.Comment", "BlogId", "dbo.Blog");
            DropIndex("dbo.Like", new[] { "BlogId" });
            DropIndex("dbo.Reviews", new[] { "FK_ProductId" });
            DropIndex("dbo.Product", new[] { "Order_Id" });
            DropIndex("dbo.Product", new[] { "FK_CategoryId" });
            DropIndex("dbo.Image", new[] { "Store_Id" });
            DropIndex("dbo.Image", new[] { "Blog_Id" });
            DropIndex("dbo.Image", new[] { "ProductId" });
            DropIndex("dbo.Comment", new[] { "BlogId" });
            DropTable("dbo.Orders");
            DropTable("dbo.Like");
            DropTable("dbo.Store");
            DropTable("dbo.Reviews");
            DropTable("dbo.Category");
            DropTable("dbo.Product");
            DropTable("dbo.Image");
            DropTable("dbo.Comment");
            DropTable("dbo.Blog");
        }
    }
}
