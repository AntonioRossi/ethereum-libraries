module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*"
    },
    coverage: {
      host: "localhost",
      port: 7545,
      network_id: "*",
      gas: 0xfffffffffff,
      gasPrice: 0x01
    }
  }
};
