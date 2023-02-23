color primario: #1d9bf0


       <% if (user.image.includes("http")) { %>
        <img
          class="slide-bottom"
          style="
            border-radius: 100%;
            width: 70px;
            height: 70px;
            object-fit: cover;
          "
          src="<%= user.image %> "
        />
        <!--   coment -->
        <% } else {%>
        <img
          class="slide-bottom"
          style="
            border-radius: 100%;
            width: 70px;
            height: 70px;
            object-fit: cover;
          "
          src="/img/<%= user.image %>"
          alt="user-photo"
        />
        <% } %>