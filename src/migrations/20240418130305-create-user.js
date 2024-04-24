'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      sso_token: {
        type: Sequelize.STRING,
        allowNull:true
      },
      logged_in_at: {
        type: Sequelize.DATE,
        allowNull:true
      },
      profile_image: {
        type: Sequelize.STRING,
        allowNull:true
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull:true
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull:true
      },
      name: {
        type: Sequelize.STRING,
        allowNull:true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};