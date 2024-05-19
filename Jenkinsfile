pipeline {
    agent any

    environment {
        DOCKER_IMAGE_NAME = "my-node-app"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/VasudevanS1906/Jenkins-CI-CD.git'
            }
        }

        stage('Build') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_IMAGE_NAME}:${BUILD_NUMBER} ."
                    }
                }
        }

        stage('Test') {
            steps {
                sh "docker run ${DOCKER_IMAGE_NAME}:${BUILD_NUMBER} npm test"
            }
        }

        stage('Deploy to Staging') {
            steps {
                sh "docker run -d --name staging-app -p 8080:3000 ${DOCKER_IMAGE_NAME}:${BUILD_NUMBER}"
            }
        }

        stage('Approval') {
            steps {
                input "Deploy to Production?"
            }
        }

        stage('Deploy to Production') {
            steps {
                sh "docker run -d --name prod-app -p 80:3000 ${DOCKER_IMAGE_NAME}:${BUILD_NUMBER}"
            }
        }
    }
}
