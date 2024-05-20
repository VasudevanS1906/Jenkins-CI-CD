pipeline {
    agent any {
        docker {
            image 'wrax382/jenkins-ci-cd:latest'
        }
    }
    stages {
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'npm run deploy'
            }
        }
    }
}
