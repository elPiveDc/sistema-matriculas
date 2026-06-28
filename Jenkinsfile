pipeline {

    agent any

    stages {

        stage('Diagnostico') {
            steps {
                sh 'git --version || true'
                sh 'python --version || true'
                sh 'pip --version || true'
                sh 'docker --version || true'
                sh 'pwd'
                sh 'ls -la'
            }
        }

    }
}