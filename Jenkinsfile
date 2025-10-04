pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Cloning source code from GitHub '
                git url: "https://github.com/khushiNgm/QuizeApp.git", branch:"main"
                echo 'Source code successfully cloned'
            }
        }
     stage('Build Docker Image') {
        steps {
             sh 'whoami'
                echo 'Building Docker image for application'
                sh 'docker build -t quiz-app:latest .'
            }
        }

      stage('Run Tests') {
            steps {
                echo 'Running automated tests (if any)'
            }
        }

       stage("Push Image to DockerHub") {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: "dockerHubCreds",
                    usernameVariable: "dockerHubUser", 
                    passwordVariable: "dockerHubPass")]) {
                    
                    echo 'Logging into DockerHub'
                    sh 'echo $dockerHubPass | docker login -u $dockerHubUser --password-stdin'
                    
                    echo 'Tagging Docker image'
                    sh "docker image tag quiz-app:latest ${dockerHubUser}/quiz-app:latest"
                    
                    echo 'Pushing Docker image to DockerHub'
                    sh "docker push ${dockerHubUser}/quiz-app:latest"
                }
            }
        }

     stage('Deploy Application to EC2') {
            steps {
             withCredentials([
             sshUserPrivateKey(credentialsId: 'ec2-key', keyFileVariable: 'EC2_KEY'),
             usernamePassword(credentialsId: 'dockerHubCreds', usernameVariable: 'dockerHubUser', passwordVariable: 'dockerHubPass')
        ]) {
            echo 'Deploying Docker container to EC2 instance'
            sh """
                ssh -o StrictHostKeyChecking=no -i "\$EC2_KEY" ubuntu@54.91.240.69 "
                    docker login -u \$dockerHubUser -p \$dockerHubPass &&
                    docker pull \$dockerHubUser/quiz-app:latest &&
                    docker stop quiz-app || true &&
                    docker rm quiz-app || true &&
                    docker run -d -p 80:80 --name quiz-app \$dockerHubUser/quiz-app:latest
                "
            """
            echo 'Deployment to EC2 completed successfully'
        }
     }
   }
 }
}
