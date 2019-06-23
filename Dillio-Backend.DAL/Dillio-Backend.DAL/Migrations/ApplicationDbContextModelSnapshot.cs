﻿// <auto-generated />
using System;
using Dillio_Backend.DAL;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Dillio_Backend.DAL.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Dillio_Backend.BLL.Core.Domain.ApplicationUser", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(250)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(250)");

                    b.HasKey("Id");

                    b.ToTable("ApplicationUsers");
                });

            modelBuilder.Entity("Dillio_Backend.BLL.Core.Domain.Blog", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(200)");

                    b.Property<string>("FK_UserId");

                    b.Property<string>("ImageURL");

                    b.Property<DateTime>("TimeOfBLog");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.HasIndex("FK_UserId");

                    b.ToTable("Blog");
                });

            modelBuilder.Entity("Dillio_Backend.BLL.Core.Domain.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.ToTable("Category");
                });

            modelBuilder.Entity("Dillio_Backend.BLL.Core.Domain.Comment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("BlogId");

                    b.Property<string>("FK_UserId");

                    b.Property<string>("Text")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.HasIndex("BlogId");

                    b.HasIndex("FK_UserId");

                    b.ToTable("Comment");
                });

            modelBuilder.Entity("Dillio_Backend.BLL.Core.Domain.Image", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("ProductId");

                    b.Property<string>("Url")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("Id");

                    b.HasIndex("ProductId");

                    b.ToTable("Image");
                });

            modelBuilder.Entity("Dillio_Backend.BLL.Core.Domain.Like", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("BlogId");

                    b.Property<string>("FK_UserId");

                    b.HasKey("Id");

                    b.HasIndex("BlogId");

                    b.HasIndex("FK_UserId");

                    b.ToTable("Like");
                });

            modelBuilder.Entity("Dillio_Backend.BLL.Core.Domain.Order", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DateOfOrder");

                    b.Property<string>("FK_UserId");

                    b.HasKey("Id");

                    b.HasIndex("FK_UserId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("Dillio_Backend.BLL.Core.Domain.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description");

                    b.Property<float>("Discount");

                    b.Property<int>("FK_CategoryId");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<int?>("OrderId");

                    b.Property<float>("Price");

                    b.HasKey("Id");

                    b.HasIndex("FK_CategoryId");

                    b.HasIndex("OrderId");

                    b.ToTable("Product");
                });

            modelBuilder.Entity("Dillio_Backend.BLL.Core.Domain.Review", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email");

                    b.Property<int>("FK_ProductId");

                    b.Property<string>("FK_UserId");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(250)");

                    b.Property<string>("ReviewDescription");

                    b.HasKey("Id");

                    b.HasIndex("FK_ProductId");

                    b.HasIndex("FK_UserId");

                    b.ToTable("Review");
                });

            modelBuilder.Entity("Dillio_Backend.BLL.Core.Domain.Store", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ImageURL");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.ToTable("Store");
                });

            modelBuilder.Entity("Dillio_Backend.BLL.Core.Domain.Blog", b =>
                {
                    b.HasOne("Dillio_Backend.BLL.Core.Domain.ApplicationUser", "User")
                        .WithMany("Blogs")
                        .HasForeignKey("FK_UserId")
                        .OnDelete(DeleteBehavior.SetNull);
                });

            modelBuilder.Entity("Dillio_Backend.BLL.Core.Domain.Comment", b =>
                {
                    b.HasOne("Dillio_Backend.BLL.Core.Domain.Blog", "Blog")
                        .WithMany("Comments")
                        .HasForeignKey("BlogId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Dillio_Backend.BLL.Core.Domain.ApplicationUser", "User")
                        .WithMany("Comments")
                        .HasForeignKey("FK_UserId")
                        .OnDelete(DeleteBehavior.SetNull);
                });

            modelBuilder.Entity("Dillio_Backend.BLL.Core.Domain.Image", b =>
                {
                    b.HasOne("Dillio_Backend.BLL.Core.Domain.Product", "Product")
                        .WithMany("Images")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Dillio_Backend.BLL.Core.Domain.Like", b =>
                {
                    b.HasOne("Dillio_Backend.BLL.Core.Domain.Blog", "Blog")
                        .WithMany("Likes")
                        .HasForeignKey("BlogId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Dillio_Backend.BLL.Core.Domain.ApplicationUser", "User")
                        .WithMany("Likes")
                        .HasForeignKey("FK_UserId")
                        .OnDelete(DeleteBehavior.SetNull);
                });

            modelBuilder.Entity("Dillio_Backend.BLL.Core.Domain.Order", b =>
                {
                    b.HasOne("Dillio_Backend.BLL.Core.Domain.ApplicationUser", "User")
                        .WithMany("Orders")
                        .HasForeignKey("FK_UserId")
                        .OnDelete(DeleteBehavior.SetNull);
                });

            modelBuilder.Entity("Dillio_Backend.BLL.Core.Domain.Product", b =>
                {
                    b.HasOne("Dillio_Backend.BLL.Core.Domain.Category", "Category")
                        .WithMany("Products")
                        .HasForeignKey("FK_CategoryId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Dillio_Backend.BLL.Core.Domain.Order")
                        .WithMany("Products")
                        .HasForeignKey("OrderId");
                });

            modelBuilder.Entity("Dillio_Backend.BLL.Core.Domain.Review", b =>
                {
                    b.HasOne("Dillio_Backend.BLL.Core.Domain.Product", "Product")
                        .WithMany("Reviews")
                        .HasForeignKey("FK_ProductId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Dillio_Backend.BLL.Core.Domain.ApplicationUser", "User")
                        .WithMany("Reviews")
                        .HasForeignKey("FK_UserId")
                        .OnDelete(DeleteBehavior.SetNull);
                });
#pragma warning restore 612, 618
        }
    }
}
