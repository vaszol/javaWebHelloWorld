<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: vas
  Date: 24.10.2015
  Time: 12:18
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Guestbook posts</title>
</head>
<body>
<table border="1">
  <c:forEach items="${posts}" var="post">
  <tr>
    <td>${post.id}</td>
    <td><c:out value="${post.text}"/></td>
    <td>
      <a href="delete?id=${post.id}">
        <img src="delete.png">
      </a>
    </td>
  </tr>
  </c:forEach>
  <form action="/WebDopog/add" method="post">
    <tr>
      <td colspan="2">
        <input name="text" type="text">
      </td>
      <td>
        <input type="submit">
      </td>
    </tr>
  </form>
</table>

</body>
</html>
