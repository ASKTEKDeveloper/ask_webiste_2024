UPDATE
    Tbl_client_reviews
SET
    CompanyName = @CompanyName,
    LogoFileName = @LogoFileName,
    UserName = @UserName,
    Designation = @Designation,
    Review = @Review,
    ActiveStatus = @ActiveStatus,
    ModifyedBy = @ModifyedBy,
    ModifyedDate = GETDATE()
WHERE
    ReviewID = @ReviewID