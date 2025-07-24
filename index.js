const http = require('http');

// Define port from environment or default to 80
const PORT = process.env.PORT || 80;

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Success message for DoorFeed CI/CD deployment
  res.end(`
🚀 CI/CD Pipeline Deployment Successful!

🎯 Application: DoorFeed Web App
🔧 Environment: Staging
📦 Deployment Type: ECS Fargate via GitHub Actions
✅ Status: Running & Healthy

Thank you for reviewing this CI/CD assessment submission.
— Deployed with ❤️ using GitHub Actions + AWS ECS
  `);
});

// Start the server
server.listen(PORT, () => {
  console.log(`✅ DoorFeed App is live and listening on port ${PORT}`);
});
