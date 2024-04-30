module.exports = {
    apps : [{
      name   : "01-example-heap",
      script : "./index.js",
      instances: "max",
      max_memory_restart : "150M"
    }]
  }