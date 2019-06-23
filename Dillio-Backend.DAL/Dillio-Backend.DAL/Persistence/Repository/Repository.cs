using Dillio_Backend.BLL.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace Dillio_Backend.DAL.Persistence.Repository
{
    /// <summary>
    /// Generic Implementation of the repository
    /// </summary>
    /// <typeparam name="TEntity"></typeparam>
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        #region MemberVariable
        //the main class members needed to deal with the database
        protected readonly ApplicationDbContext context;
        protected readonly DbSet<TEntity> _entities;
        #endregion

        #region Constructor
        public Repository(ApplicationDbContext context)
        {
            this.context = context;
            _entities = context.Set<TEntity>();

        }

        #endregion

        #region Generic CRUD Operations

        public void Add(TEntity entity)
        {
             _entities.Add(entity);
        }

        public void AddRange(IEnumerable<TEntity> entities)
        {
            _entities.AddRange(entities);
        }

        public IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> predicate)
        {
            return _entities.Where(predicate);
        }

        public TEntity Get(object id)
        {
            return _entities.Find(id);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return _entities;
        }

        public void Remove(TEntity entity)
        {
            _entities.Remove(entity);
        }

        public void RemoveRange(IEnumerable<TEntity> entities)
        {
            _entities.RemoveRange(entities);
        }

        #endregion
   

        
    }
}
