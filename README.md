# demo-app-frontend

demo-app-frontend service

## Stack
- Langage : ${{ values.language }}
- CI/CD : Tekton → Harbor → ArgoCD
- Plateforme : DxP

## Démarrage rapide
```bash
# Cloner le repo
git clone <repo-url>
cd demo-app-frontend

# Lancer en local
docker build -t demo-app-frontend .
docker run -p 8080:8080 demo-app-frontend
```
