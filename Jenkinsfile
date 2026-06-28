pipeline {
    agent any

    stages {
        stage('Install Dependencies & Run Tests') {
            agent {
                docker { 
                    image 'python:3.10-slim'
                    args '-v /var/jenkins_home/.cache:/root/.cache'
                }
            }
            steps {
                sh 'pip install -r requirements.txt'
                echo 'Running Tests...'
                sh 'pytest --cov=. tests/test_api.py'
                echo 'Running Linter...'
                sh 'flake8 .'
            }
        }
    }
}
