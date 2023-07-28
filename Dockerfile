# Use uma imagem base do PostgreSQL a partir do Docker Hub
FROM postgres:latest

# Opcional: Defina as variáveis de ambiente para configuração do banco de dados
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword
ENV POSTGRES_DB=mydatabase

# Opcional: Exponha a porta padrão do PostgreSQL (padrão: 5432)
EXPOSE 5432

# Opcional: Copie um arquivo de inicialização SQL (se necessário)
# COPY init.sql /docker-entrypoint-initdb.d/

# O comando CMD é herdado da imagem base do PostgreSQL e iniciará o servidor PostgreSQL
# CMD ["postgres"]
