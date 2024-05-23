pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = "wrax382/jenkins-ci-cd"
        DOCKER_CREDENTIALS = "docker-hub-credentials"
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Deploy to Docker') {
            steps {
                script {
                    docker.withRegistry('', DOCKER_CREDENTIALS) {
                        docker.image("${DOCKER_IMAGE}").pull()
                        docker.image("${DOCKER_IMAGE}").run("-p 3000:3000")
                    }
                }
            }
        }
    }
}
