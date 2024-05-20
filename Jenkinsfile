pipeline {
    agent any
    stages {
        stage('Pull Docker Image') {
            steps {
                sh 'docker pull wrax382/jenkins-ci-cd:latest'
            }
        }
        stage('Test') {
            steps {
                sh 'docker run --privileged -u root wrax382/jenkins-ci-cd:latest npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker run --privileged -u root wrax382/jenkins-ci-cd:latest npm run deploy'
            }
        }
    }
}
