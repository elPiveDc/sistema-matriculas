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
            environment {
                PYTHONPATH = '.'
            }
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
    }
}
