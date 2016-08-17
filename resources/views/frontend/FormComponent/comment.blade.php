<a [routerLink]="['/']">Home</a>
<h3>Comments</h3>
<form [formGroup]="commentForm" (ngSubmit)="save(comment)" autocomplete="off">
	<div class="panel panel-default">
		<div class="panel-body">
			<div class="form-group">
				<input 
					type="text" 
					name="username" 
					id="username" 
					class="form-control" 
					placeholder="Username"
					formControlName="username"
					[(ngModel)]="comment.username">
			</div>
			<div class="form-group">
				<textarea 
					name="comment" 
					id="comment" 
					class="form-control" 
					rows="5" 
					placeholder="Comment"
					formControlName="comment"
					[(ngModel)]="comment.comment">
					</textarea>
			</div>
			<button type="submit" class="btn btn-primary" [disabled]="!commentForm.valid">Comment</button>
		</div>
	</div>
	<div class="alert alert-info text-center text-muted" *ngIf="loading">Loading...</div>
	<div class="panel panel-default" *ngFor="let comment of comments">
		<div class="panel-body">
			<h4>@{{ comment.username }}</h4><div class="text-muted pull-right">@{{ comment.time }}</div>
			<p>@{{ comment.comment }}</p>
		</div>
	</div>
</form>