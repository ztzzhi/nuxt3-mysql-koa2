/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80026
 Source Host           : localhost:3306
 Source Schema         : runningman

 Target Server Type    : MySQL
 Target Server Version : 80026
 File Encoding         : 65001

 Date: 04/01/2022 15:57:07
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for V1NewsTypes
-- ----------------------------
DROP TABLE IF EXISTS `V1NewsTypes`;
CREATE TABLE `V1NewsTypes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL COMMENT '新闻类型简介',
  `code` varchar(255) NOT NULL COMMENT '新闻对应代码',
  `codeurl` varchar(255) NOT NULL COMMENT '新闻对应请求路径',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `code` (`code`),
  UNIQUE KEY `codeurl` (`codeurl`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of V1NewsTypes
-- ----------------------------
BEGIN;
INSERT INTO `V1NewsTypes` VALUES (1, '每日简报', 'topnews', 'http://api.tianapi.com/topnews/index');
INSERT INTO `V1NewsTypes` VALUES (2, 'IT资讯', 'it', 'http://api.tianapi.com/it/index');
INSERT INTO `V1NewsTypes` VALUES (3, '娱乐新闻', 'entertainment', 'http://api.tianapi.com/huabian/index');
INSERT INTO `V1NewsTypes` VALUES (4, '电竞', 'esports', 'http://api.tianapi.com/esports/index');
INSERT INTO `V1NewsTypes` VALUES (5, '健康知识', 'health', 'http://api.tianapi.com/health/index');
INSERT INTO `V1NewsTypes` VALUES (6, 'NBA', 'nba', 'http://api.tianapi.com/nba/index');
INSERT INTO `V1NewsTypes` VALUES (7, 'CBA', 'cba', 'http://api.tianapi.com/cba/index');
INSERT INTO `V1NewsTypes` VALUES (8, '女性', 'woman', 'http://api.tianapi.com/woman/index');
INSERT INTO `V1NewsTypes` VALUES (9, '影视', 'movies', 'http://api.tianapi.com/film/index');
INSERT INTO `V1NewsTypes` VALUES (10, '军事资讯', 'military', 'http://api.tianapi.com/military/index');
INSERT INTO `V1NewsTypes` VALUES (11, '汽车', 'car', 'http://api.tianapi.com/auto/index');
INSERT INTO `V1NewsTypes` VALUES (12, '综合新闻', 'totalnews', 'http://api.tianapi.com/generalnews/index');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
