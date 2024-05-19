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
        stage('Verify Docker') {
            steps {
                sh 'docker version'
            }
        }
        stage('Check Docker Service') {
            steps {
                sh 'service docker status'
                sh 'service docker restart'
            }
        }
        stage('Check Docker Logs') {
            steps {
                sh 'docker logs'
            }
        }
        stage('Build') {
            steps {
                script {
                    sh 'docker build -t ${DOCKER_IMAGE_NAME}:${BUILD_NUMBER} .'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    sh 'docker run ${DOCKER_IMAGE_NAME}:${BUILD_NUMBER} npm test'
                }
            }
        }
    }
}
