'use strict';

/**
 * Persona.js controller
 *
 * @description: A set of functions called "actions" for managing `Persona`.
 */

module.exports = {

  /**
   * Retrieve persona records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.persona.search(ctx.query);
    } else {
      return strapi.services.persona.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a persona record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.persona.fetch(ctx.params);
  },

  /**
   * Count persona records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.persona.count(ctx.query);
  },

  /**
   * Create a/an persona record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.persona.add(ctx.request.body);
  },

  /**
   * Update a/an persona record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.persona.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an persona record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.persona.remove(ctx.params);
  }
};
