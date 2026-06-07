pipeline {
    agent any

    stages {
        stage('Fix Dependencies') {
            steps {
                sh '''
                    apt-get install -y libatomic1 || apk add --no-cache libatomic || true
                '''
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t nodejs-app .'
            }
        }

        stage('Run') {
            steps {
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
