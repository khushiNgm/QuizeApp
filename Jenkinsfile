pipeline {
    agent any

    stages {
        stage('Code') {
            steps {
                echo 'This is cloning the code '
                git url: "https://github.com/khushiNgm/QuizeApp.git", branch:"main"
                echo 'successfull cloning...... :)'
            }
        }
        stage('Build'){
            steps{
                sh 'whoami'
                echo 'This is building the code'
                sh 'docker build -t quiz-app:latest .'
            }
        }
        stage('Test'){
            steps{
                echo'This is testing the code'
            }
        }
        stage('Deploy'){
            steps{
                echo'This is deploying the code'
                sh 'docker run -d -p 80:80 quiz-app:latest '
            }
        }
    }
}
