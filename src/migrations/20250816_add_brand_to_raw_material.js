module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('RawMaterials', 'BrandId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Brands',
        key: 'id',
      },
      onDelete: 'RESTRICT',
    });
    await queryInterface.removeColumn('RawMaterials', 'brand');
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('RawMaterials', 'brand', {
      type: Sequelize.STRING,
    });
    await queryInterface.removeColumn('RawMaterials', 'BrandId');
  },
};
