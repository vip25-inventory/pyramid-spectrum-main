pipeline {
  agent { label 'docker-agent' }
  
  environment {
    IMAGE_NAME = "pyramid-spectrum"
    CONTAINER_NAME = "pyramid-spectrum"
    IMAGE_TAG = "v1"
    NETWORK = "pyramid_net"
  }
  
  stages {
    stage('Checkout') {
      steps {
        echo "Checking out code..."
        checkout scm
      }
    }
    
    stage('Build Image') {
      steps {
        echo "Building Docker image..."
        sh 'docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .'
      }
    }
    
    stage('Stop Old Container') {
      steps {
        echo "Stopping old container..."
        sh '''
          docker stop ${CONTAINER_NAME} || true
          docker rm ${CONTAINER_NAME} || true
        '''
      }
    }
    
    stage('Deploy Container') {
      steps {
        echo "Deploying new container..."
        sh '''
          # Create network if it doesn't exist
          docker network create ${NETWORK} || true
          
          # Run container on the network (no port mapping)
          docker run -d \
            --name ${CONTAINER_NAME} \
            --restart always \
            --network ${NETWORK} \
            ${IMAGE_NAME}:${IMAGE_TAG}
        '''
      }
    }
    
    stage('Cleanup') {
      steps {
        echo "Cleaning up old images..."
        sh 'docker image prune -f'
      }
    }
  }
  
  post {
    success {
      echo "✅ Pyramid Spectrum deployed successfully on network ${NETWORK}!"
      echo "Configure Nginx Proxy Manager to forward to: ${CONTAINER_NAME}:80"
    }
    failure {
      echo "❌ Deployment failed. Check logs above."
    }
  }
}
