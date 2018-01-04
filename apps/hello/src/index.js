const { createLogger } = require('@offirmo/universal-logger-node')

const logger = createLogger({
	name: 'demo',
	level: 'trace',
})

logger.warn('aaah')
