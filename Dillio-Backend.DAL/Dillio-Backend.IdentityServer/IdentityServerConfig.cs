using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using IdentityServer4;
using IdentityServer4.Models;
using IdentityServer4.Test;

namespace Dillio_Backend.IdentityServer
{
    public static class IdentityServerConfig
    {
        public static IEnumerable<IdentityResource> GetIdentityResources ()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile()
            };
        }

        public static IEnumerable<ApiResource> GetApiResources()
        {
            return new List<ApiResource>
            {
                new ApiResource("DemoApi")
            };
        }

        public static IEnumerable<Client> GetClients()
        {
            return new List<Client>
            {
                new Client()
                {
                    ClientId = "AuthWeb",
                    ClientName = "AuthWeb Demo Client",
                    AllowedGrantTypes = GrantTypes.Implicit,
                    RedirectUris = {"https://localhost:44343/signin-oidc"},
                    PostLogoutRedirectUris = new List<string>{"https://localhost:44343/signout-callback-oidc"},
                    AllowedScopes = new List<string>
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile

                    }

                },
                new Client()
                {
                    ClientId = "WebApp",
                    AllowedGrantTypes = GrantTypes.ClientCredentials,
                    ClientSecrets = new List<Secret>
                    {
                        new Secret("MySecret".Sha256())
                    },
                    AllowedScopes = new List<string>
                    {
                        "DemoApi"
                    }
                },
                new Client
                {
                    ClientId = "Spa",
                    AllowedGrantTypes = GrantTypes.Implicit,
                    AllowAccessTokensViaBrowser = true,
                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId, "DemoApi"
                    },
                    RedirectUris = {"https://localhost:44343/SignInCallback.html"},
                    PostLogoutRedirectUris = {"https://localhost:44343/SignOutCallback.html"},
                    AllowedCorsOrigins = {"https://localhost:44343"},
                    RequireConsent = false

                }
                
            };
        }

        public static List<TestUser> GetUsers()
        {
            return new List<TestUser>
            {
                new TestUser
                {
                    SubjectId = "1",
                    Username = "ZeroKoll",
                    Password = "test",
                    Claims = new List<Claim>
                    {
                        new Claim("name","ZeroKoll")
                    }
                }
            };
        }
    }
}
