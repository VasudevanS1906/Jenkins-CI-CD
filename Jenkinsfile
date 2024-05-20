pipeline {
    agent {
        docker {
            image 'wrax382/jenkins-ci-cd:latest'
            args '--user root'
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
