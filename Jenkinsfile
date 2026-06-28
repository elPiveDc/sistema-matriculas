pipeline {

    agent any

    stages {

        stage('Create Virtual Environment') {
            steps {
                sh '''
                    python -m venv venv
                    . venv/bin/activate
                    pip install --upgrade pip
                    pip install -r requirements.txt
                '''
            }
        }

        stage('Run Tests') {
            steps {
                sh '''
                    . venv/bin/activate
                    pytest --cov=. tests/test_api.py
                '''
            }
        }

        stage('Run Linter') {
            steps {
                sh '''
                    . venv/bin/activate
                    flake8 .
                '''
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