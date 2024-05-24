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


pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'your-docker-hub-username/your-image-name:tag'
        KUBERNETES_NAMESPACE = 'your-kubernetes-namespace'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                withKubeConfig([credentialsId: 'your-kubernetes-credentials-id', serverUrl: 'https://your-kubernetes-api-server']) {
                    sh """
                        kubectl set image deployment/your-deployment-name \
                            your-container-name=${env.DOCKER_IMAGE} \
                            --namespace=${env.KUBERNETES_NAMESPACE} \
                            --record
                    """
                }
            }
        }
    }
}
