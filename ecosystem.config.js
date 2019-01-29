module.exports = {
  apps : [{
    name      : 'app',
	log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    script    : 'app.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }]  
};
