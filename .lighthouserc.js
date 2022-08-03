'use strict'

module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      staticDistDir: './next',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
