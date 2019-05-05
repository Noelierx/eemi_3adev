job('My Job 1') {
    scm {
        git('https://github.com/Noelierx/eemi_3adev/eemi_3adev_cours_docker/jenkins-demo1') {  node -> 
            node / gitConfigName('noelie.roux')
            node / gitConfigEmail('noelie.roux@eemi.com')
        }
    }
    triggers {
        scm('H/5 * * * *')
    }
    wrappers {
        nodejs('NodeJS10')
    }
    steps {
        shell("npm install")
        shell("npm test")
        shell("docker build . -t test")
        shell("docker push test")
    }
}
