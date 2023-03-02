
DROP TABLE IF EXISTS symbolTable;

CREATE TABLE symbolTable (
    symbolTableId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    dataType VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    scope VARCHAR(255) NOT NULL,
    line INT NOT NULL,
    value VARCHAR(255) NOT NULL,
    father VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO symbolTable (name, dataType, type, scope, line, value, father) VALUES ('name', 'string', 'variable', 'global', 1, 'arthur', 'null');
INSERT INTO symbolTable (name, dataType, type, scope, line, value, father) VALUES ('sum', 'int', 'function', 'global', 2, 'null', 'null');
INSERT INTO symbolTable (name, dataType, type, scope, line, value, father) VALUES ('num1', 'int', 'variable', 'function', 3, '1', 'sum');
