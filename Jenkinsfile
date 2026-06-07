pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t nodejs-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker stop nodejs-app || true'
                sh 'docker rm nodejs-app || true'
                sh 'docker run -d -p 3000:3000 --name nodejs-app nodejs-app'
            }
        }
    }

    post {
        failure {
            echo 'Build failed!'
        }
        success {
            echo 'Build succeeded!'
        }
    }
}
