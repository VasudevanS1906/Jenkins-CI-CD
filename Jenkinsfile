pipeline {
    agent any
    stages {
        stage('Pull Docker Image') {
            steps {
                node {
                    docker.image('wrax382/jenkins-ci-cd:latest').pull()
                }
            }
        }
        stage('Test') {
            steps {
                node {
                    docker.image('wrax382/jenkins-ci-cd:latest').withRun('-u root') {
                        sh 'npm test'
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                node {
                    docker.image('wrax382/jenkins-ci-cd:latest').withRun('-u root') {
                        sh 'npm run deploy'
                    }
                }
            }
        }
    }
}
