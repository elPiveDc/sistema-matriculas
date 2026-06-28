pipeline {

    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'pip install -r requirements.txt'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'pytest --cov=. tests/test_api.py'
            }
        }

        stage('Run Linter') {
            steps {
                sh 'flake8 .'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t sistema-matriculas .'
            }
        }

        stage('Run Tests Inside Docker') {
            steps {
                sh 'docker run --rm sistema-matriculas pytest tests/test_api.py'
            }
        }
    }
}