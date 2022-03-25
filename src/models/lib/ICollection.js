'use strict';

class ICollection {
  constructor(model) {
    this.model = model;
  }

  async create(json) {
    try {
      let instance = await this.model.create(json);

      return instance;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async readAll() {
    try {
      let result = await this.model.findAll();
      return result;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async read(id, options) {
    try {
      const idNum = +id;

      let query = { where: { id: idNum }, ...options };

      let result = await this.model.findOne(query);
      return result;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async update(json, id) {
    try {
      const idNum = +id;

      let query = { where: { id: idNum } };
      await this.model.update(json, query);
      let updatedInstance = await this.model.findOne(query);

      return updatedInstance;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async delete(id) {
    try {
      const idNum = +id;
      let query = { where: { id: idNum } };

      let instanceToDestroy = await this.model.findOne(query);
      await this.model.destroy(query);
      return instanceToDestroy;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = ICollection;
