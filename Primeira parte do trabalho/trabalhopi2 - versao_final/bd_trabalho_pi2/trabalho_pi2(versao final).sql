-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 01-Out-2019 às 05:52
-- Versão do servidor: 10.3.16-MariaDB
-- versão do PHP: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `trabalho_pi2`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `chamados`
--

CREATE TABLE `chamados` (
  `id_chamado` int(11) NOT NULL,
  `patri_equipamento` int(11) NOT NULL,
  `nome_usuario` varchar(100) NOT NULL,
  `desc_problema` text NOT NULL,
  `solucao_problema` text NOT NULL,
  `id_status` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `chamados`
--

INSERT INTO `chamados` (`id_chamado`, `patri_equipamento`, `nome_usuario`, `desc_problema`, `solucao_problema`, `id_status`, `id_usuario`) VALUES
(1, 123305, 'Joana', 'Micro esta lento', 'Micro formatado', 3, 2),
(2, 137024, 'Paulo', 'Atualizacao de SO', '', 2, 4),
(8, 156964, 'Mario', 'Micro Travando', 'Formatado', 1, 7);

-- --------------------------------------------------------

--
-- Estrutura da tabela `equipamentos`
--

CREATE TABLE `equipamentos` (
  `id_equipamento` int(11) NOT NULL,
  `patri_equipamento` int(11) NOT NULL,
  `modelo_equipamento` varchar(255) NOT NULL,
  `nro_serie_equipamento` varchar(255) NOT NULL,
  `data_aquisicao` date NOT NULL,
  `nro_nota_fiscal` int(11) NOT NULL,
  `local_equipamento` varchar(255) NOT NULL,
  `observacao` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `equipamentos`
--

INSERT INTO `equipamentos` (`id_equipamento`, `patri_equipamento`, `modelo_equipamento`, `nro_serie_equipamento`, `data_aquisicao`, `nro_nota_fiscal`, `local_equipamento`, `observacao`) VALUES
(1, 100000, 'MICRO PENTIUM INTEL I7 - DDR3 2GB - 160GB', 'GI0727/14', '2014-04-21', 555122534, '11662 - HCO-ARQ MED E ESTATISTICA', ''),
(2, 100001, 'MICRO PENTIUM CORE2 DUO- HD 160GB - 1GB MB - MARCA: HP', 'BRG838F9W2', '2009-10-12', 42586547, '11803 - HCO-CONTROLE DE INFECCAO', '4 Andar do HCO'),
(3, 137024, 'MICRO AMD DUAL CORE 2.3 - 1GB - HD 160GB - LENOVO', '6234DG2L1BFRDZ', '2010-09-30', 253547, '11803 - HCO-CONTROLE DE INFECCAO', ''),
(5, 134833, 'MICROCOMPUTADOR INTEL CORE I7, HD-160GB, 2 GB RAM', 'GI0194/12', '2011-11-06', 395874512, '90000 - GHC-DIRETORIA', ''),
(7, 160590, 'MICROCOMPUTADOR PENTIUM INTEL I5  - 1TB HD - DDR4 4 GB', 'GI0624/14', '2018-11-18', 368569741, '11978 - POSTO 1 B - CIRURGIA GERAL', ''),
(9, 156964, 'MICROCOMPUTADOR PENTIUM I7, 2 GB, 160 GB', 'GI0237/14', '2014-05-30', 239856471, '10400 - HCO-COMUNICACAO SOCIAL', ''),
(10, 123305, 'MICROCOMPUTADOR INTEL CORE I7 ', 'GI0114/14', '2014-10-13', 395765482, '41730 - HCC-NUTRICAO', ''),
(15, 144503, 'MICROCOMPUTADOR DO TIPO DESKTOP LENOVO', 'PE81263', '2010-08-03', 253497628, '21870 - HCO-EMERGENCIA / ENFERM', 'Area amarela da emergencia');

-- --------------------------------------------------------

--
-- Estrutura da tabela `status`
--

CREATE TABLE `status` (
  `id_status` int(11) NOT NULL,
  `desc_status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `status`
--

INSERT INTO `status` (`id_status`, `desc_status`) VALUES
(1, 'Aberto'),
(2, 'Atendimento'),
(3, 'Concluido');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `login_usuario` varchar(50) NOT NULL,
  `senha_usuario` varchar(10) NOT NULL,
  `nome_usuario` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `login_usuario`, `senha_usuario`, `nome_usuario`) VALUES
(1, 'admin', 'admin', 'Administrador'),
(2, 'cleissom', 'clei33', 'Cleissom FB'),
(3, 'esta', 'esta11', 'Estagiario'),
(4, 'mmm', 'mmm', 'Marcello'),
(5, '', '', ''),
(6, 'cars', 'cat15', 'Carla'),
(7, 'leoc', 'leocb', 'Leonardo Caldeira Benites'),
(10, 'teo', 'teo97', 'Teo Becker');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `chamados`
--
ALTER TABLE `chamados`
  ADD PRIMARY KEY (`id_chamado`),
  ADD UNIQUE KEY `patri_equipamento` (`patri_equipamento`),
  ADD KEY `id_status` (`id_status`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Índices para tabela `equipamentos`
--
ALTER TABLE `equipamentos`
  ADD PRIMARY KEY (`id_equipamento`),
  ADD UNIQUE KEY `patri_equipamento` (`patri_equipamento`),
  ADD KEY `nro_serie_equipamento` (`nro_serie_equipamento`);

--
-- Índices para tabela `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id_status`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `chamados`
--
ALTER TABLE `chamados`
  MODIFY `id_chamado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de tabela `equipamentos`
--
ALTER TABLE `equipamentos`
  MODIFY `id_equipamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `status`
--
ALTER TABLE `status`
  MODIFY `id_status` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `chamados`
--
ALTER TABLE `chamados`
  ADD CONSTRAINT `fk_id_status` FOREIGN KEY (`id_status`) REFERENCES `status` (`id_status`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_patri_equipamento` FOREIGN KEY (`patri_equipamento`) REFERENCES `equipamentos` (`patri_equipamento`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
