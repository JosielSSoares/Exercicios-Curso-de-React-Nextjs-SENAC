// diagnostico-mysql.js
require('dotenv').config();
const mysql = require('mysql2/promise');

async function diagnosticoCompleto() {
  console.log('=== DIAGNÓSTICO DE CONEXÃO MYSQL ===\n');
  
  // 1. Verificar variáveis de ambiente
  console.log('1. VARIÁVEIS DE AMBIENTE:');
  console.log('DB_HOST:', process.env.DB_HOST || 'VAZIA/NÃO DEFINIDA');
  console.log('DB_USERNAME:', process.env.DB_USERNAME || 'VAZIA/NÃO DEFINIDA');
  console.log('DB_PASSWORD:', process.env.DB_PASSWORD ? '*'.repeat(process.env.DB_PASSWORD.length) : 'VAZIA/NÃO DEFINIDA');
  console.log('DB_DATABASE:', process.env.DB_DATABASE || 'VAZIA/NÃO DEFINIDA');
  console.log('');

  // 2. Testar conexão básica
  console.log('2. TESTE DE CONEXÃO:');
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      // Primeiro teste sem especificar database
    });
    
    console.log('✅ Conexão com MySQL estabelecida!');
    
    // 3. Verificar se o banco existe
    console.log('\n3. VERIFICAÇÃO DO BANCO:');
    const [databases] = await connection.execute('SHOW DATABASES');
    const dbExists = databases.some(db => db.Database === process.env.DB_DATABASE);
    
    if (dbExists) {
      console.log(`✅ Banco '${process.env.DB_DATABASE}' existe!`);
      
      // Conectar ao banco específico
      await connection.changeUser({
        database: process.env.DB_DATABASE
      });
      
      // 4. Verificar tabelas
      console.log('\n4. TABELAS NO BANCO:');
      const [tables] = await connection.execute('SHOW TABLES');
      console.log('Tabelas encontradas:', tables);
      
      // 5. Verificar estrutura da tabela usuarios
      if (tables.some(t => Object.values(t)[0] === 'usuarios')) {
        console.log('\n5. ESTRUTURA DA TABELA USUARIOS:');
        const [structure] = await connection.execute('DESCRIBE usuarios');
        console.log(structure);
      } else {
        console.log('\n❌ Tabela "usuarios" não encontrada!');
      }
      
    } else {
      console.log(`❌ Banco '${process.env.DB_DATABASE}' NÃO existe!`);
      console.log('Bancos disponíveis:', databases.map(db => db.Database));
    }
    
    await connection.end();
    
  } catch (error) {
    console.log('❌ ERRO DE CONEXÃO:');
    console.log('Código:', error.code);
    console.log('Mensagem:', error.message);
    console.log('');
    
    if (error.code === 'ECONNREFUSED') {
      console.log('💡 SOLUÇÃO: MySQL Server não está rodando!');
      console.log('   - Instale XAMPP ou MySQL Server');
      console.log('   - Inicie o serviço MySQL');
    } else if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      console.log('💡 SOLUÇÃO: Problema de credenciais!');
      console.log('   - Verifique usuário e senha no .env');
      console.log('   - Configure senha do root no MySQL');
    }
  }
}

diagnosticoCompleto();