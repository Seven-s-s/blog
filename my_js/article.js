		var index = 1;
		$(document).ready(function() {
			document.documentElement.scrollTop=0;
			$("#doc-container").load("home.html");
		});
		$(function(){
			$(window).scroll(function () {
				var scrollTop = $(this).scrollTop();
				var scrollHeight = $(document).height();
				var windowHeight = $(this).height();
				if (scrollTop + windowHeight > scrollHeight - 100 && index < 5) {
					$("#article" + index).css("display", "block");
					index++;
				}
			});
			
		})

		$("#search").click(function () {
			confirm("该功能暂未开发");
		})
		function article(){
			index = 1;
			document.documentElement.scrollTop=0;
			$("#doc-container").load("home.html");
		}
		// java
		function java(){
			index = 1;
			document.documentElement.scrollTop=0;
			$("#doc-container").load("Java.html");
		}
		function basic(){
			document.documentElement.scrollTop=0;
			$("#doc-container").load("java/basic.html");
		}
		function file(){
			document.documentElement.scrollTop=0;
			$("#doc-container").load("java/file.html");
		}
		function collection(){
			document.documentElement.scrollTop=0;
			$("#doc-container").load("java/collection.html");
		}
		//sql
		function sql(){
			index = 1;
			document.documentElement.scrollTop=0;
			$("#doc-container").load("sql.html");
		}
		function mysql(){
			document.documentElement.scrollTop=0;
			$("#doc-container").load("sql/mysql.html");
		}
		//question
		function questions(){
			index = 1;
			document.documentElement.scrollTop=0;
			$("#doc-container").load("questions.html");
		}
		function java_questions(){
			document.documentElement.scrollTop=0;
			$("#doc-container").load("question/java_questions.html");
		}
		function spring_questions(){
			document.documentElement.scrollTop=0;
			$("#doc-container").load("question/spring_questions.html");
		}
		function springmvc_questions(){
			document.documentElement.scrollTop=0;
			$("#doc-container").load("question/springmvc_questions.html");
		}
		function mybatis_questions(){
			document.documentElement.scrollTop=0;
			$("#doc-container").load("question/mybatis_questions.html");
		}
		function sql_questions(){
			document.documentElement.scrollTop=0;
			$("#doc-container").load("question/sql_questions.html");
		}
		//linux
		function linux(){
			document.documentElement.scrollTop=0;
			$("#doc-container").load("linux.html");
		}
		//设计模式
		function design(){
			document.documentElement.scrollTop=0;
			$("#doc-container").load("design_patterns.html");
		}
		//算法
		function algorithm(){
			document.documentElement.scrollTop=0;
			$("#doc-container").load("algorithm.html");
		}
		function shiro(){
			document.documentElement.scrollTop=0;
			$("#doc-container").load("shiro.html");
		}
		//util
		function git(){
			document.documentElement.scrollTop=0;
			$("#doc-container").load("utils/git.html");
		}
		function idea(){
			document.documentElement.scrollTop=0;
			$("#doc-container").load("utils/idea.html");
		}
		//返回
		function back(){
			document.documentElement.scrollTop=0;
			$("#doc-container").load("java.html");
		}