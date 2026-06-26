// Scoped Jest config for algorithms/* JS tests.
// Algorithm files use plain CommonJS — babel transform is unnecessary
// and breaks if @babel/preset-env is not installed at root.
module.exports = {
    rootDir: '../../..',
    testMatch: ['<rootDir>/algorithms/tests/js/**/*.test.js'],
    transform: {},
};
